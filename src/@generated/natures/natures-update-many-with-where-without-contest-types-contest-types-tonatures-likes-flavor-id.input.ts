import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesScalarWhereInput } from './natures-scalar-where.input';
import { Type } from 'class-transformer';
import { naturesUpdateManyMutationInput } from './natures-update-many-mutation.input';

@InputType()
export class naturesUpdateManyWithWhereWithoutContest_types_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => naturesScalarWhereInput, {nullable:false})
    @Type(() => naturesScalarWhereInput)
    where!: naturesScalarWhereInput;

    @Field(() => naturesUpdateManyMutationInput, {nullable:false})
    @Type(() => naturesUpdateManyMutationInput)
    data!: naturesUpdateManyMutationInput;
}
