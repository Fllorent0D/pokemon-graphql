import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_flavor_summariesInput } from './languages-update-without-move-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_flavor_summariesInput } from './languages-create-without-move-flavor-summaries.input';

@InputType()
export class languagesUpsertWithoutMove_flavor_summariesInput {

    @Field(() => languagesUpdateWithoutMove_flavor_summariesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_flavor_summariesInput)
    update!: languagesUpdateWithoutMove_flavor_summariesInput;

    @Field(() => languagesCreateWithoutMove_flavor_summariesInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_flavor_summariesInput)
    create!: languagesCreateWithoutMove_flavor_summariesInput;
}
