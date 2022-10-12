import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_textUpdateWithoutVersion_groupsInput } from './item-flavor-text-update-without-version-groups.input';

@InputType()
export class item_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_textWhereUniqueInput)
    where!: item_flavor_textWhereUniqueInput;

    @Field(() => item_flavor_textUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => item_flavor_textUpdateWithoutVersion_groupsInput)
    data!: item_flavor_textUpdateWithoutVersion_groupsInput;
}
