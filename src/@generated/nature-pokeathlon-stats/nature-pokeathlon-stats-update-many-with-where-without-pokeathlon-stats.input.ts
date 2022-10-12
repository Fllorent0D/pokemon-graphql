import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsScalarWhereInput } from './nature-pokeathlon-stats-scalar-where.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsUpdateManyMutationInput } from './nature-pokeathlon-stats-update-many-mutation.input';

@InputType()
export class nature_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput {

    @Field(() => nature_pokeathlon_statsScalarWhereInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsScalarWhereInput)
    where!: nature_pokeathlon_statsScalarWhereInput;

    @Field(() => nature_pokeathlon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsUpdateManyMutationInput)
    data!: nature_pokeathlon_statsUpdateManyMutationInput;
}
