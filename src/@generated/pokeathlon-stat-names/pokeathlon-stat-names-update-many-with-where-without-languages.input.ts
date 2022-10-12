import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesScalarWhereInput } from './pokeathlon-stat-names-scalar-where.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesUpdateManyMutationInput } from './pokeathlon-stat-names-update-many-mutation.input';

@InputType()
export class pokeathlon_stat_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => pokeathlon_stat_namesScalarWhereInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesScalarWhereInput)
    where!: pokeathlon_stat_namesScalarWhereInput;

    @Field(() => pokeathlon_stat_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateManyMutationInput)
    data!: pokeathlon_stat_namesUpdateManyMutationInput;
}
