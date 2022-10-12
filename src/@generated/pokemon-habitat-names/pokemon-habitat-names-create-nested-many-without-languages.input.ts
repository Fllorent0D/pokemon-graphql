import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesCreateWithoutLanguagesInput } from './pokemon-habitat-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-habitat-names-create-or-connect-without-languages.input';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';

@InputType()
export class pokemon_habitat_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_habitat_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_habitat_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_habitat_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    connect?: Array<pokemon_habitat_namesWhereUniqueInput>;
}
