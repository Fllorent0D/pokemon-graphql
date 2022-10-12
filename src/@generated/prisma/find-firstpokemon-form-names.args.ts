import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesWhereInput } from '../pokemon-form-names/pokemon-form-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesOrderByWithRelationInput } from '../pokemon-form-names/pokemon-form-names-order-by-with-relation.input';
import { pokemon_form_namesWhereUniqueInput } from '../pokemon-form-names/pokemon-form-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_form_namesScalarFieldEnum } from './pokemon-form-names-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonFormNamesArgs {

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    @Type(() => pokemon_form_namesWhereInput)
    where?: pokemon_form_namesWhereInput;

    @Field(() => [pokemon_form_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_form_namesOrderByWithRelationInput>;

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_form_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_form_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_form_namesScalarFieldEnum>;
}
