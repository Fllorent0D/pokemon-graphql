import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutGrowth_rate_proseInput } from './languages-create-without-growth-rate-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutGrowth_rate_proseInput } from './languages-create-or-connect-without-growth-rate-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutGrowth_rate_proseInput {

    @Field(() => languagesCreateWithoutGrowth_rate_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutGrowth_rate_proseInput)
    create?: languagesCreateWithoutGrowth_rate_proseInput;

    @Field(() => languagesCreateOrConnectWithoutGrowth_rate_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutGrowth_rate_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutGrowth_rate_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
