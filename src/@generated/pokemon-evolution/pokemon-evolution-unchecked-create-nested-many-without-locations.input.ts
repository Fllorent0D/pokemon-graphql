import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutLocationsInput } from './pokemon-evolution-create-without-locations.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutLocationsInput } from './pokemon-evolution-create-or-connect-without-locations.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class pokemon_evolutionUncheckedCreateNestedManyWithoutLocationsInput {

    @Field(() => [pokemon_evolutionCreateWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutLocationsInput)
    create?: Array<pokemon_evolutionCreateWithoutLocationsInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutLocationsInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;
}
