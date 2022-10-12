import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsCreateWithoutEgg_group_proseInput } from './egg-groups-create-without-egg-group-prose.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateOrConnectWithoutEgg_group_proseInput } from './egg-groups-create-or-connect-without-egg-group-prose.input';
import { egg_groupsUpsertWithoutEgg_group_proseInput } from './egg-groups-upsert-without-egg-group-prose.input';
import { egg_groupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { egg_groupsUpdateWithoutEgg_group_proseInput } from './egg-groups-update-without-egg-group-prose.input';

@InputType()
export class egg_groupsUpdateOneRequiredWithoutEgg_group_proseNestedInput {

    @Field(() => egg_groupsCreateWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => egg_groupsCreateWithoutEgg_group_proseInput)
    create?: egg_groupsCreateWithoutEgg_group_proseInput;

    @Field(() => egg_groupsCreateOrConnectWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => egg_groupsCreateOrConnectWithoutEgg_group_proseInput)
    connectOrCreate?: egg_groupsCreateOrConnectWithoutEgg_group_proseInput;

    @Field(() => egg_groupsUpsertWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => egg_groupsUpsertWithoutEgg_group_proseInput)
    upsert?: egg_groupsUpsertWithoutEgg_group_proseInput;

    @Field(() => egg_groupsWhereUniqueInput, {nullable:true})
    @Type(() => egg_groupsWhereUniqueInput)
    connect?: egg_groupsWhereUniqueInput;

    @Field(() => egg_groupsUpdateWithoutEgg_group_proseInput, {nullable:true})
    @Type(() => egg_groupsUpdateWithoutEgg_group_proseInput)
    update?: egg_groupsUpdateWithoutEgg_group_proseInput;
}
