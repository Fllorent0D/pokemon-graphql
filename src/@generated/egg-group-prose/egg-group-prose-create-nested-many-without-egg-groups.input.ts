import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseCreateWithoutEgg_groupsInput } from './egg-group-prose-create-without-egg-groups.input';
import { Type } from 'class-transformer';
import { egg_group_proseCreateOrConnectWithoutEgg_groupsInput } from './egg-group-prose-create-or-connect-without-egg-groups.input';
import { egg_group_proseWhereUniqueInput } from './egg-group-prose-where-unique.input';

@InputType()
export class egg_group_proseCreateNestedManyWithoutEgg_groupsInput {

    @Field(() => [egg_group_proseCreateWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseCreateWithoutEgg_groupsInput)
    create?: Array<egg_group_proseCreateWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseCreateOrConnectWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseCreateOrConnectWithoutEgg_groupsInput)
    connectOrCreate?: Array<egg_group_proseCreateOrConnectWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    connect?: Array<egg_group_proseWhereUniqueInput>;
}
