import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutGenerationsInput } from './version-groups-create-without-generations.input';

@InputType()
export class version_groupsCreateOrConnectWithoutGenerationsInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutGenerationsInput)
    create!: version_groupsCreateWithoutGenerationsInput;
}
