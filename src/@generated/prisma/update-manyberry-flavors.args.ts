import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsUpdateManyMutationInput } from '../berry-flavors/berry-flavors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { berry_flavorsWhereInput } from '../berry-flavors/berry-flavors-where.input';

@ArgsType()
export class UpdateManyberryFlavorsArgs {

    @Field(() => berry_flavorsUpdateManyMutationInput, {nullable:false})
    @Type(() => berry_flavorsUpdateManyMutationInput)
    data!: berry_flavorsUpdateManyMutationInput;

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    @Type(() => berry_flavorsWhereInput)
    where?: berry_flavorsWhereInput;
}
