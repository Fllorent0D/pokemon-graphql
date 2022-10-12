import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateWithoutVersionsInput } from './pokemon-species-flavor-text-create-without-versions.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput } from './pokemon-species-flavor-text-create-or-connect-without-versions.input';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';

@InputType()
export class pokemon_species_flavor_textCreateNestedManyWithoutVersionsInput {

    @Field(() => [pokemon_species_flavor_textCreateWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateWithoutVersionsInput)
    create?: Array<pokemon_species_flavor_textCreateWithoutVersionsInput>;

    @Field(() => [pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_textWhereUniqueInput>;
}
