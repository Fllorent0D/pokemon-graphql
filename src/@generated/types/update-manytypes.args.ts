import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesUpdateManyMutationInput } from './types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { typesWhereInput } from './types-where.input';

@ArgsType()
export class UpdateManytypesArgs {

    @Field(() => typesUpdateManyMutationInput, {nullable:false})
    @Type(() => typesUpdateManyMutationInput)
    data!: typesUpdateManyMutationInput;

    @Field(() => typesWhereInput, {nullable:true})
    @Type(() => typesWhereInput)
    where?: typesWhereInput;
}
