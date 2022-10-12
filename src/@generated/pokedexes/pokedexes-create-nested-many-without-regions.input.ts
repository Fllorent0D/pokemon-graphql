import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutRegionsInput } from './pokedexes-create-without-regions.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutRegionsInput } from './pokedexes-create-or-connect-without-regions.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class pokedexesCreateNestedManyWithoutRegionsInput {

    @Field(() => [pokedexesCreateWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesCreateWithoutRegionsInput)
    create?: Array<pokedexesCreateWithoutRegionsInput>;

    @Field(() => [pokedexesCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<pokedexesCreateOrConnectWithoutRegionsInput>;

    @Field(() => [pokedexesWhereUniqueInput], {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: Array<pokedexesWhereUniqueInput>;
}
