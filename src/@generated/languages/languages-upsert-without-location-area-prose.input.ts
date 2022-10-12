import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutLocation_area_proseInput } from './languages-update-without-location-area-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutLocation_area_proseInput } from './languages-create-without-location-area-prose.input';

@InputType()
export class languagesUpsertWithoutLocation_area_proseInput {

    @Field(() => languagesUpdateWithoutLocation_area_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutLocation_area_proseInput)
    update!: languagesUpdateWithoutLocation_area_proseInput;

    @Field(() => languagesCreateWithoutLocation_area_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutLocation_area_proseInput)
    create!: languagesCreateWithoutLocation_area_proseInput;
}
