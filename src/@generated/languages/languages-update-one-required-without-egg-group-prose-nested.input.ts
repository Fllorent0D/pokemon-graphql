import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEgg_group_proseInput } from './languages-create-without-egg-group-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEgg_group_proseInput } from './languages-create-or-connect-without-egg-group-prose.input';
import { languagesUpsertWithoutEgg_group_proseInput } from './languages-upsert-without-egg-group-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutEgg_group_proseInput } from './languages-update-without-egg-group-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutEgg_group_proseNestedInput {

    @Field(() => languagesCreateWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEgg_group_proseInput)
    create?: languagesCreateWithoutEgg_group_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEgg_group_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEgg_group_proseInput;

    @Field(() => languagesUpsertWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutEgg_group_proseInput)
    upsert?: languagesUpsertWithoutEgg_group_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutEgg_group_proseInput)
    update?: languagesUpdateWithoutEgg_group_proseInput;
}
