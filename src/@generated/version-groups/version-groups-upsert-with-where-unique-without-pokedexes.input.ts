import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsUpdateWithoutPokedexesInput } from './version-groups-update-without-pokedexes.input';
import { version_groupsCreateWithoutPokedexesInput } from './version-groups-create-without-pokedexes.input';

@InputType()
export class version_groupsUpsertWithWhereUniqueWithoutPokedexesInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutPokedexesInput)
    update!: version_groupsUpdateWithoutPokedexesInput;

    @Field(() => version_groupsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutPokedexesInput)
    create!: version_groupsCreateWithoutPokedexesInput;
}
