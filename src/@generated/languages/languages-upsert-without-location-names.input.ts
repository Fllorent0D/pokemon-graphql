import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutLocation_namesInput } from './languages-update-without-location-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutLocation_namesInput } from './languages-create-without-location-names.input';

@InputType()
export class languagesUpsertWithoutLocation_namesInput {

    @Field(() => languagesUpdateWithoutLocation_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutLocation_namesInput)
    update!: languagesUpdateWithoutLocation_namesInput;

    @Field(() => languagesCreateWithoutLocation_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutLocation_namesInput)
    create!: languagesCreateWithoutLocation_namesInput;
}
