import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_flavor_summariesInput } from './languages-create-without-item-flavor-summaries.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_flavor_summariesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_flavor_summariesInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_flavor_summariesInput)
    create!: languagesCreateWithoutItem_flavor_summariesInput;
}
