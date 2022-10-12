import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesUpdateManyMutationInput } from '../ability-names/ability-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ability_namesWhereInput } from '../ability-names/ability-names-where.input';

@ArgsType()
export class UpdateManyabilityNamesArgs {

    @Field(() => ability_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_namesUpdateManyMutationInput)
    data!: ability_namesUpdateManyMutationInput;

    @Field(() => ability_namesWhereInput, {nullable:true})
    @Type(() => ability_namesWhereInput)
    where?: ability_namesWhereInput;
}
