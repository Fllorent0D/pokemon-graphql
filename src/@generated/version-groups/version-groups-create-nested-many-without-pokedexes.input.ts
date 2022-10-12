import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutPokedexesInput } from './version-groups-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutPokedexesInput } from './version-groups-create-or-connect-without-pokedexes.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedManyWithoutPokedexesInput {

    @Field(() => [version_groupsCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsCreateWithoutPokedexesInput)
    create?: Array<version_groupsCreateWithoutPokedexesInput>;

    @Field(() => [version_groupsCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<version_groupsCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [version_groupsWhereUniqueInput], {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: Array<version_groupsWhereUniqueInput>;
}
