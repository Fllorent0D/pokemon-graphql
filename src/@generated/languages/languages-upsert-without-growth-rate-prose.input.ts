import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutGrowth_rate_proseInput } from './languages-update-without-growth-rate-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutGrowth_rate_proseInput } from './languages-create-without-growth-rate-prose.input';

@InputType()
export class languagesUpsertWithoutGrowth_rate_proseInput {

    @Field(() => languagesUpdateWithoutGrowth_rate_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutGrowth_rate_proseInput)
    update!: languagesUpdateWithoutGrowth_rate_proseInput;

    @Field(() => languagesCreateWithoutGrowth_rate_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutGrowth_rate_proseInput)
    create!: languagesCreateWithoutGrowth_rate_proseInput;
}
