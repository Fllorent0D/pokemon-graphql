import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesCreateWithoutLanguagesInput } from './pokemon-species-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-species-names-create-or-connect-without-languages.input';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';

@InputType()
export class pokemon_species_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_species_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    connect?: Array<pokemon_species_namesWhereUniqueInput>;
}
