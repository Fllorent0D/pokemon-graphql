import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutRegion_namesInput } from './languages-update-without-region-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutRegion_namesInput } from './languages-create-without-region-names.input';

@InputType()
export class languagesUpsertWithoutRegion_namesInput {

    @Field(() => languagesUpdateWithoutRegion_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutRegion_namesInput)
    update!: languagesUpdateWithoutRegion_namesInput;

    @Field(() => languagesCreateWithoutRegion_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutRegion_namesInput)
    create!: languagesCreateWithoutRegion_namesInput;
}
