import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesScalarWhereInput } from './move-meta-ailment-names-scalar-where.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesUpdateManyMutationInput } from './move-meta-ailment-names-update-many-mutation.input';

@InputType()
export class move_meta_ailment_namesUpdateManyWithWhereWithoutMove_meta_ailmentsInput {

    @Field(() => move_meta_ailment_namesScalarWhereInput, {nullable:false})
    @Type(() => move_meta_ailment_namesScalarWhereInput)
    where!: move_meta_ailment_namesScalarWhereInput;

    @Field(() => move_meta_ailment_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_ailment_namesUpdateManyMutationInput)
    data!: move_meta_ailment_namesUpdateManyMutationInput;
}
