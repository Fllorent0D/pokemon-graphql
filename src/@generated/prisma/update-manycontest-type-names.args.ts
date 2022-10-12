import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesUpdateManyMutationInput } from '../contest-type-names/contest-type-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { contest_type_namesWhereInput } from '../contest-type-names/contest-type-names-where.input';

@ArgsType()
export class UpdateManycontestTypeNamesArgs {

    @Field(() => contest_type_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => contest_type_namesUpdateManyMutationInput)
    data!: contest_type_namesUpdateManyMutationInput;

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    @Type(() => contest_type_namesWhereInput)
    where?: contest_type_namesWhereInput;
}
