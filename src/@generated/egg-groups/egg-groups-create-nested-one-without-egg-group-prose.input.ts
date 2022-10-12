import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsCreateWithoutEgg_group_proseInput } from './egg-groups-create-without-egg-group-prose.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateOrConnectWithoutEgg_group_proseInput } from './egg-groups-create-or-connect-without-egg-group-prose.input';
import { egg_groupsWhereUniqueInput } from './egg-groups-where-unique.input';

@InputType()
export class egg_groupsCreateNestedOneWithoutEgg_group_proseInput {

    @Field(() => egg_groupsCreateWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => egg_groupsCreateWithoutEgg_group_proseInput)
    create?: egg_groupsCreateWithoutEgg_group_proseInput;

    @Field(() => egg_groupsCreateOrConnectWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => egg_groupsCreateOrConnectWithoutEgg_group_proseInput)
    connectOrCreate?: egg_groupsCreateOrConnectWithoutEgg_group_proseInput;

    @Field(() => egg_groupsWhereUniqueInput, {nullable:true})
    @Type(() => egg_groupsWhereUniqueInput)
    connect?: egg_groupsWhereUniqueInput;
}
