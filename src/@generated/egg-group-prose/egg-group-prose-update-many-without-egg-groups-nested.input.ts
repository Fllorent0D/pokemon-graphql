import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseCreateWithoutEgg_groupsInput } from './egg-group-prose-create-without-egg-groups.input';
import { Type } from 'class-transformer';
import { egg_group_proseCreateOrConnectWithoutEgg_groupsInput } from './egg-group-prose-create-or-connect-without-egg-groups.input';
import { egg_group_proseUpsertWithWhereUniqueWithoutEgg_groupsInput } from './egg-group-prose-upsert-with-where-unique-without-egg-groups.input';
import { egg_group_proseWhereUniqueInput } from './egg-group-prose-where-unique.input';
import { egg_group_proseUpdateWithWhereUniqueWithoutEgg_groupsInput } from './egg-group-prose-update-with-where-unique-without-egg-groups.input';
import { egg_group_proseUpdateManyWithWhereWithoutEgg_groupsInput } from './egg-group-prose-update-many-with-where-without-egg-groups.input';
import { egg_group_proseScalarWhereInput } from './egg-group-prose-scalar-where.input';

@InputType()
export class egg_group_proseUpdateManyWithoutEgg_groupsNestedInput {

    @Field(() => [egg_group_proseCreateWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseCreateWithoutEgg_groupsInput)
    create?: Array<egg_group_proseCreateWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseCreateOrConnectWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseCreateOrConnectWithoutEgg_groupsInput)
    connectOrCreate?: Array<egg_group_proseCreateOrConnectWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseUpsertWithWhereUniqueWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseUpsertWithWhereUniqueWithoutEgg_groupsInput)
    upsert?: Array<egg_group_proseUpsertWithWhereUniqueWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    set?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    disconnect?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    delete?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    connect?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseUpdateWithWhereUniqueWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseUpdateWithWhereUniqueWithoutEgg_groupsInput)
    update?: Array<egg_group_proseUpdateWithWhereUniqueWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseUpdateManyWithWhereWithoutEgg_groupsInput], {nullable:true})
    @Type(() => egg_group_proseUpdateManyWithWhereWithoutEgg_groupsInput)
    updateMany?: Array<egg_group_proseUpdateManyWithWhereWithoutEgg_groupsInput>;

    @Field(() => [egg_group_proseScalarWhereInput], {nullable:true})
    @Type(() => egg_group_proseScalarWhereInput)
    deleteMany?: Array<egg_group_proseScalarWhereInput>;
}
