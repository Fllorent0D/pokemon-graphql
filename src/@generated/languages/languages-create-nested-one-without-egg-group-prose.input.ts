import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEgg_group_proseInput } from './languages-create-without-egg-group-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEgg_group_proseInput } from './languages-create-or-connect-without-egg-group-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutEgg_group_proseInput {

    @Field(() => languagesCreateWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEgg_group_proseInput)
    create?: languagesCreateWithoutEgg_group_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEgg_group_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEgg_group_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
