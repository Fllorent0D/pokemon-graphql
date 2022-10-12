import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesUpdateManyMutationInput } from './pokedexes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokedexesWhereInput } from './pokedexes-where.input';

@ArgsType()
export class UpdateManypokedexesArgs {

    @Field(() => pokedexesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokedexesUpdateManyMutationInput)
    data!: pokedexesUpdateManyMutationInput;

    @Field(() => pokedexesWhereInput, {nullable:true})
    @Type(() => pokedexesWhereInput)
    where?: pokedexesWhereInput;
}
