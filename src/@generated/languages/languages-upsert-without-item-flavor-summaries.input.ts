import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_flavor_summariesInput } from './languages-update-without-item-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_flavor_summariesInput } from './languages-create-without-item-flavor-summaries.input';

@InputType()
export class languagesUpsertWithoutItem_flavor_summariesInput {

    @Field(() => languagesUpdateWithoutItem_flavor_summariesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_flavor_summariesInput)
    update!: languagesUpdateWithoutItem_flavor_summariesInput;

    @Field(() => languagesCreateWithoutItem_flavor_summariesInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_flavor_summariesInput)
    create!: languagesCreateWithoutItem_flavor_summariesInput;
}
