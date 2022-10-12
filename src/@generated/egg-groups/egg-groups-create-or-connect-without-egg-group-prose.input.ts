import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateWithoutEgg_group_proseInput } from './egg-groups-create-without-egg-group-prose.input';

@InputType()
export class egg_groupsCreateOrConnectWithoutEgg_group_proseInput {

    @Field(() => egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => egg_groupsWhereUniqueInput)
    where!: egg_groupsWhereUniqueInput;

    @Field(() => egg_groupsCreateWithoutEgg_group_proseInput, {nullable:false})
    @Type(() => egg_groupsCreateWithoutEgg_group_proseInput)
    create!: egg_groupsCreateWithoutEgg_group_proseInput;
}
