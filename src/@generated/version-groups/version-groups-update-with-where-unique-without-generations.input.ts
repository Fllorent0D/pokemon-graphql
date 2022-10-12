import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsUpdateWithoutGenerationsInput } from './version-groups-update-without-generations.input';

@InputType()
export class version_groupsUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutGenerationsInput)
    data!: version_groupsUpdateWithoutGenerationsInput;
}
