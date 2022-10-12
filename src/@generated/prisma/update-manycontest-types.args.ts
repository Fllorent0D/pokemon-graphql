import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesUpdateManyMutationInput } from '../contest-types/contest-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { contest_typesWhereInput } from '../contest-types/contest-types-where.input';

@ArgsType()
export class UpdateManycontestTypesArgs {

    @Field(() => contest_typesUpdateManyMutationInput, {nullable:false})
    @Type(() => contest_typesUpdateManyMutationInput)
    data!: contest_typesUpdateManyMutationInput;

    @Field(() => contest_typesWhereInput, {nullable:true})
    @Type(() => contest_typesWhereInput)
    where?: contest_typesWhereInput;
}
