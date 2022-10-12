import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_flavor_summariesInput } from './languages-create-without-item-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_flavor_summariesInput } from './languages-create-or-connect-without-item-flavor-summaries.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_flavor_summariesInput {

    @Field(() => languagesCreateWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_flavor_summariesInput)
    create?: languagesCreateWithoutItem_flavor_summariesInput;

    @Field(() => languagesCreateOrConnectWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_flavor_summariesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_flavor_summariesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
