import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsUpdateWithoutEgg_group_proseInput } from './egg-groups-update-without-egg-group-prose.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateWithoutEgg_group_proseInput } from './egg-groups-create-without-egg-group-prose.input';

@InputType()
export class egg_groupsUpsertWithoutEgg_group_proseInput {

    @Field(() => egg_groupsUpdateWithoutEgg_group_proseInput, {nullable:false})
    @Type(() => egg_groupsUpdateWithoutEgg_group_proseInput)
    update!: egg_groupsUpdateWithoutEgg_group_proseInput;

    @Field(() => egg_groupsCreateWithoutEgg_group_proseInput, {nullable:false})
    @Type(() => egg_groupsCreateWithoutEgg_group_proseInput)
    create!: egg_groupsCreateWithoutEgg_group_proseInput;
}
