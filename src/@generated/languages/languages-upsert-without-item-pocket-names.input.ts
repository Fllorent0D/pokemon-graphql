import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_pocket_namesInput } from './languages-update-without-item-pocket-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_pocket_namesInput } from './languages-create-without-item-pocket-names.input';

@InputType()
export class languagesUpsertWithoutItem_pocket_namesInput {

    @Field(() => languagesUpdateWithoutItem_pocket_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_pocket_namesInput)
    update!: languagesUpdateWithoutItem_pocket_namesInput;

    @Field(() => languagesCreateWithoutItem_pocket_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_pocket_namesInput)
    create!: languagesCreateWithoutItem_pocket_namesInput;
}
