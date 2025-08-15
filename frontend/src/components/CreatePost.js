import React, { useState } from 'react';
import { X, Upload, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { mockCurrentUser } from '../mock/mockData.js';

const CreatePost = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [step, setStep] = useState('upload'); // upload, edit, share

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setStep('edit');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShare = () => {
    console.log('Sharing post:', {
      image: selectedImage,
      caption,
      location,
      user: mockCurrentUser
    });
    
    // Reset form
    setSelectedImage(null);
    setCaption('');
    setLocation('');
    setStep('upload');
    onClose();
  };

  const handleClose = () => {
    setSelectedImage(null);
    setCaption('');
    setLocation('');
    setStep('upload');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={step === 'edit' ? () => setStep('upload') : handleClose}
              className="p-0"
            >
              {step === 'edit' ? 'Back' : <X className="h-5 w-5" />}
            </Button>
            <DialogTitle className="text-center font-semibold">
              {step === 'upload' && 'Create new post'}
              {step === 'edit' && 'Edit'}
              {step === 'share' && 'Share'}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={step === 'edit' ? () => setStep('share') : step === 'share' ? handleShare : undefined}
              className="text-blue-500 font-semibold p-0"
              disabled={step === 'upload'}
            >
              {step === 'edit' && 'Next'}
              {step === 'share' && 'Share'}
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 flex">
          {step === 'upload' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="text-center">
                <Upload className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-light mb-2">Drag photos and videos here</h3>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                    Select from computer
                  </Button>
                </label>
              </div>
            </div>
          )}

          {(step === 'edit' || step === 'share') && selectedImage && (
            <>
              {/* Image Preview */}
              <div className="flex-1 bg-black flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Edit Panel */}
              {step === 'share' && (
                <div className="w-80 border-l border-gray-200 bg-white flex flex-col">
                  <div className="p-4 space-y-4 flex-1">
                    {/* User Info */}
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={mockCurrentUser.avatar} alt={mockCurrentUser.username} />
                        <AvatarFallback>{mockCurrentUser.username[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-sm">{mockCurrentUser.username}</span>
                    </div>

                    {/* Caption */}
                    <div>
                      <Textarea
                        placeholder="Write a caption..."
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className="border-none resize-none text-sm p-0 min-h-[100px] focus:ring-0"
                        maxLength={2200}
                      />
                      <div className="text-right text-xs text-gray-400 mt-1">
                        {caption.length}/2,200
                      </div>
                    </div>

                    {/* Location */}
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Add location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10 border-b border-gray-200 rounded-none border-x-0 border-t-0 bg-transparent focus:ring-0"
                      />
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Hide like and view counts on this post</span>
                        <input type="checkbox" className="toggle" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Turn off commenting</span>
                        <input type="checkbox" className="toggle" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;