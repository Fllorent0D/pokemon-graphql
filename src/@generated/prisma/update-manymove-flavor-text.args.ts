import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textUpdateManyMutationInput } from '../move-flavor-text/move-flavor-text-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_flavor_textWhereInput } from '../move-flavor-text/move-flavor-text-where.input';

@ArgsType()
export class UpdateManymoveFlavorTextArgs {

    @Field(() => move_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flavor_textUpdateManyMutationInput)
    data!: move_flavor_textUpdateManyMutationInput;

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    @Type(() => move_flavor_textWhereInput)
    where?: move_flavor_textWhereInput;
}
