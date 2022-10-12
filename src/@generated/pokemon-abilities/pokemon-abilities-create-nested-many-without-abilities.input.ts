import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesCreateWithoutAbilitiesInput } from './pokemon-abilities-create-without-abilities.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput } from './pokemon-abilities-create-or-connect-without-abilities.input';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';

@InputType()
export class pokemon_abilitiesCreateNestedManyWithoutAbilitiesInput {

    @Field(() => [pokemon_abilitiesCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateWithoutAbilitiesInput)
    create?: Array<pokemon_abilitiesCreateWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [pokemon_abilitiesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    connect?: Array<pokemon_abilitiesWhereUniqueInput>;
}
