import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateWithoutVersion_groupsInput } from './move-flavor-text-create-without-version-groups.input';

@InputType()
export class move_flavor_textCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;

    @Field(() => move_flavor_textCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => move_flavor_textCreateWithoutVersion_groupsInput)
    create!: move_flavor_textCreateWithoutVersion_groupsInput;
}
