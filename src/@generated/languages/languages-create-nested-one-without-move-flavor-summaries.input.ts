import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_flavor_summariesInput } from './languages-create-without-move-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_flavor_summariesInput } from './languages-create-or-connect-without-move-flavor-summaries.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_flavor_summariesInput {

    @Field(() => languagesCreateWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_flavor_summariesInput)
    create?: languagesCreateWithoutMove_flavor_summariesInput;

    @Field(() => languagesCreateOrConnectWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_flavor_summariesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_flavor_summariesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
