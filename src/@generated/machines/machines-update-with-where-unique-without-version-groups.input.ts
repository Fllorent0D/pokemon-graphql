import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesUpdateWithoutVersion_groupsInput } from './machines-update-without-version-groups.input';

@InputType()
export class machinesUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => machinesUpdateWithoutVersion_groupsInput)
    data!: machinesUpdateWithoutVersion_groupsInput;
}
