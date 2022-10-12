import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textCreateWithoutVersion_groupsInput } from './ability-flavor-text-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateOrConnectWithoutVersion_groupsInput } from './ability-flavor-text-create-or-connect-without-version-groups.input';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';

@InputType()
export class ability_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [ability_flavor_textCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textCreateWithoutVersion_groupsInput)
    create?: Array<ability_flavor_textCreateWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<ability_flavor_textCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    connect?: Array<ability_flavor_textWhereUniqueInput>;
}
