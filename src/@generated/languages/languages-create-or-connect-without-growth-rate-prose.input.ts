import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutGrowth_rate_proseInput } from './languages-create-without-growth-rate-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutGrowth_rate_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutGrowth_rate_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutGrowth_rate_proseInput)
    create!: languagesCreateWithoutGrowth_rate_proseInput;
}
