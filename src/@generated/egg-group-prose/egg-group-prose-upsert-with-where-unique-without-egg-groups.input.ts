import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseWhereUniqueInput } from './egg-group-prose-where-unique.input';
import { Type } from 'class-transformer';
import { egg_group_proseUpdateWithoutEgg_groupsInput } from './egg-group-prose-update-without-egg-groups.input';
import { egg_group_proseCreateWithoutEgg_groupsInput } from './egg-group-prose-create-without-egg-groups.input';

@InputType()
export class egg_group_proseUpsertWithWhereUniqueWithoutEgg_groupsInput {

    @Field(() => egg_group_proseWhereUniqueInput, {nullable:false})
    @Type(() => egg_group_proseWhereUniqueInput)
    where!: egg_group_proseWhereUniqueInput;

    @Field(() => egg_group_proseUpdateWithoutEgg_groupsInput, {nullable:false})
    @Type(() => egg_group_proseUpdateWithoutEgg_groupsInput)
    update!: egg_group_proseUpdateWithoutEgg_groupsInput;

    @Field(() => egg_group_proseCreateWithoutEgg_groupsInput, {nullable:false})
    @Type(() => egg_group_proseCreateWithoutEgg_groupsInput)
    create!: egg_group_proseCreateWithoutEgg_groupsInput;
}
