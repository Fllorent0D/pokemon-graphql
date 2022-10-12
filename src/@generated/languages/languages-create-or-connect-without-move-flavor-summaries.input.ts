import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_flavor_summariesInput } from './languages-create-without-move-flavor-summaries.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_flavor_summariesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_flavor_summariesInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_flavor_summariesInput)
    create!: languagesCreateWithoutMove_flavor_summariesInput;
}
