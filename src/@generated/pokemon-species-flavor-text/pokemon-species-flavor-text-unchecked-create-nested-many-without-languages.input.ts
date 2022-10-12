import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateWithoutLanguagesInput } from './pokemon-species-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput } from './pokemon-species-flavor-text-create-or-connect-without-languages.input';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';

@InputType()
export class pokemon_species_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_species_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_textWhereUniqueInput>;
}
