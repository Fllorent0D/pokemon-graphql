import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseCreateWithoutLanguagesInput } from './pokemon-species-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseCreateOrConnectWithoutLanguagesInput } from './pokemon-species-prose-create-or-connect-without-languages.input';
import { pokemon_species_proseWhereUniqueInput } from './pokemon-species-prose-where-unique.input';

@InputType()
export class pokemon_species_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_species_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateWithoutLanguagesInput)
    create?: Array<pokemon_species_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_species_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    connect?: Array<pokemon_species_proseWhereUniqueInput>;
}
