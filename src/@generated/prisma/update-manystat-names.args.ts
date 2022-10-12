import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesUpdateManyMutationInput } from '../stat-names/stat-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { stat_namesWhereInput } from '../stat-names/stat-names-where.input';

@ArgsType()
export class UpdateManystatNamesArgs {

    @Field(() => stat_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => stat_namesUpdateManyMutationInput)
    data!: stat_namesUpdateManyMutationInput;

    @Field(() => stat_namesWhereInput, {nullable:true})
    @Type(() => stat_namesWhereInput)
    where?: stat_namesWhereInput;
}
