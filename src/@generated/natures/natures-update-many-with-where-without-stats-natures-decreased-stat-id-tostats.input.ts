import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesScalarWhereInput } from './natures-scalar-where.input';
import { Type } from 'class-transformer';
import { naturesUpdateManyMutationInput } from './natures-update-many-mutation.input';

@InputType()
export class naturesUpdateManyWithWhereWithoutStats_natures_decreased_stat_idTostatsInput {

    @Field(() => naturesScalarWhereInput, {nullable:false})
    @Type(() => naturesScalarWhereInput)
    where!: naturesScalarWhereInput;

    @Field(() => naturesUpdateManyMutationInput, {nullable:false})
    @Type(() => naturesUpdateManyMutationInput)
    data!: naturesUpdateManyMutationInput;
}
